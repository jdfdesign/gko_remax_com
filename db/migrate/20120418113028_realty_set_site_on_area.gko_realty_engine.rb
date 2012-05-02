# This migration comes from gko_realty_engine (originally 20120316111111)
class RealtySetSiteOnArea < ActiveRecord::Migration
  def up
    if Site.count == 1
      @site = Site.first
      Area.all.each do |area|
        area.update_attribute(:site_id, @site.id)
      end
    end
  end
  
  def down
    
  end
end
                                      