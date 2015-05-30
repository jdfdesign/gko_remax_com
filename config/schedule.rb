set :environment, "production"
case @environment
when 'production'
  every 1.hour do
    bundle exec rake "rates:update"
  end
end


