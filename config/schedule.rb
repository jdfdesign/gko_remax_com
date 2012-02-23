#whenever --set environment=development --update-crontab
set :environment, "development"
case @environment
when 'development'
  every 1.minute do
    rake "rates:update"
  end
end
