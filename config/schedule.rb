set :environment, "production"
case @environment
when 'production'
  every 1.hour do
    rake "rates:update"
    #bundle exec rake "rates:update"
  end
end


