set :environment, "production"
case @environment
when 'production'
  every 1.hour do
    rake "bundle exec rates:update"
  end
end


