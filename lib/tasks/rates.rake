namespace :rates do
  desc "Update rates"
  task :update => :environment do
    eu_bank = EuCentralBank.new
    Money.default_bank = eu_bank
    # call this before calculating exchange rates
    # this will download the rates from ECB
    eu_bank.update_rates
    ActiveRecord::Base.transaction do
      begin
        RentalProperty.all.each do |property|
          property.rates.each do |rate| 
            puts "id #{rate.id} - price #{rate.eur_price}"
            currency = (property.currency == "$" ? "USD" : "EUR")
            #puts "#{currency} -- eur_price #{rate.eur_price} - usd_price #{rate.usd_price}" 
            if currency == "USD" && rate.usd_price
              rate.eur_price = eu_bank.exchange_with(Money.new(rate.usd_price * 100, currency), "EUR").to_f
            elsif rate.eur_price
              rate.usd_price = eu_bank.exchange_with(Money.new(rate.eur_price * 100, currency), "USD").to_f
            end
            puts "#{currency} -- eur_price #{rate.eur_price} - usd_price #{rate.usd_price}"
            rate.save!
          end
        end
      rescue Exception => e
        ActiveRecord::Rollback
          puts "ERROR #{e}"
      end
    end 
  end
end


