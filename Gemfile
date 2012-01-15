source :rubygems
source 'http://rubygems.org'

gem 'iconv'

# Gems used only for assets and not required
# in production environments by default.
group :assets do
  gem 'sass-rails',   '~> 3.1.5.rc1'
  gem 'coffee-rails', '~> 3.1.1'
  gem 'uglifier', '>= 1.0.3'
end

group :production do
  gem 'gko-core', '= 0.0.86', :git => 'git@github.com:jdfdesign/gko-cms-31.git'
  gem 'gko-auth', '= 0.0.33', :git => 'git@github.com:jdfdesign/gko-cms-31.git'
  gem 'gko-images', '= 0.0.47', :git => 'git@github.com:jdfdesign/gko-cms-31.git'
  gem 'gko-inquiry', '= 0.0.34', :git => 'git@github.com:jdfdesign/gko-cms-31.git'
  gem "gko-categories", '= 0.0.24', :git => 'git@github.com:jdfdesign/gko-cms-31.git'
  gem 'gko-sticker', '= 0.0.24', :git => 'git@github.com:jdfdesign/gko-cms-31.git'
  gem "gko-features", '= 0.0.4', :git => 'git@github.com:jdfdesign/gko-cms-31.git'
  gem 'gko-realty', '= 0.0.38',  :git => 'git@github.com:jdfdesign/gko-realty.git'
end

#group :development do
#  gem "gko-core", :path => File.expand_path('../../gko_cms_html/gko_core', __FILE__)
#  gem "gko-auth", :path => File.expand_path('../../gko_cms_html/gko_auth', __FILE__)
#  gem "gko-images", :path => File.expand_path('../../gko_cms_html/gko_images', __FILE__)
#  gem "gko-inquiry", :path => File.expand_path('../../gko_cms_html/gko_inquiry', __FILE__)
#  gem "gko-features", :path => File.expand_path('../../gko_cms_html/gko-features', __FILE__)
#  gem "gko-categories", :path => File.expand_path('../../gko_cms_html/gko-categories', __FILE__)
#  gem "gko-sticker", :path => File.expand_path('../../gko_cms_html/gko_sticker', __FILE__)
#  gem "gko-realty", :path => File.expand_path('../../gko/gko-realty', __FILE__)
#  gem 'rails-dev-boost', :git => 'git://github.com/thedarkone/rails-dev-boost.git', :require => 'rails_development_boost'
#end