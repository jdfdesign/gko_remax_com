#whenever --set environment=development --update-crontab
set :environment, "production"
case @environment
when 'production'
  every 1.minute do
    rake "rates:update"
  end
end


