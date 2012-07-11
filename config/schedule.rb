set :environment, "production"
case @environment
when 'production'
  every 1.hour do
    rake "rates:update"
  end
end


