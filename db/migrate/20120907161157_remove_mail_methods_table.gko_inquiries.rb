# This migration comes from gko_inquiries (originally 20120904182500)
class RemoveMailMethodsTable < ActiveRecord::Migration
  def up
    if table_exists?(:mail_methods)
      add_column :sites, :mailer_settings, :text unless column_exists?(:sites, :mailer_settings)
      pref_keys = ['mail_host', 'mail_domain', 'mail_port', 'mail_auth_type', 'smtp_username', 'smtp_password', 'delivery_method', 'secure_connection_type', 'mails_from', 'mail_bcc']
      result = connection.execute("SELECT id, site_id FROM mail_methods WHERE environment='production'")
      result.each do |mm|
        connection.execute("UPDATE `sites` SET `mailer_settings` = '--- \n:mail_host: \"\"\n:mail_domain: \"\"\n:mail_port: \"\"\n:mail_auth_type: \"\"\n:smtp_username: \"\"\n:smtp_password: \"\"\n:delivery_method: \"\"\n:secure_connection_type: \"\"\n:mails_from: \"\"\n:mail_bcc: \"\"\n' WHERE `sites`.`id` = #{mm[1]}")
        Site.current = site = Site.find(mm[1])
        pref_keys.each do |k|
          if p = Preference.find_by_key("mail_method/#{k}/#{mm[0]}")
            begin
              site.mailer_settings[k.to_sym] = p.value
              p.destroy
            rescue
              
            end
          end
        end
        site.save!
      end
      drop_table :mail_methods
    end
  end
end