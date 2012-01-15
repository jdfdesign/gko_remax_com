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

#group :production do
#  gem 'gko-core', '= 0.0.72', :git => 'git@github.com:jdfdesign/gko_cms.git'
#  gem 'gko-auth', '= 0.0.29', :git => 'git@github.com:jdfdesign/gko_cms.git'
#  gem 'gko-images', '= 0.0.46', :git => 'git@github.com:jdfdesign/gko_cms.git'
#  gem 'gko-inquiry', '= 0.0.32', :git => 'git@github.com:jdfdesign/gko_cms.git'
#  gem "gko-category", '= 0.0.23', :git => 'git@github.com:jdfdesign/gko_cms.git'
#  gem 'gko-sticker', '= 0.0.23', :git => 'git@github.com:jdfdesign/gko_cms.git'
#  gem 'gko-realty', '= 0.0.37',  :git => 'git@github.com:jdfdesign/gko-realty.git'
#  gem "compass", ">= 0.11.5"
#  gem 'smurf', :git => 'git@github.com:jdfdesign/smurf.git'
#end

group :development do
  gem "gko-core", :path => File.expand_path('../../gko_cms_html/gko_core', __FILE__)
  gem "gko-auth", :path => File.expand_path('../../gko_cms_html/gko_auth', __FILE__)
  gem "gko-images", :path => File.expand_path('../../gko_cms_html/gko_images', __FILE__)
  gem "gko-inquiry", :path => File.expand_path('../../gko_cms_html/gko_inquiry', __FILE__)
  gem "gko-features", :path => File.expand_path('../../gko_cms_html/gko-features', __FILE__)
  gem "gko-categories", :path => File.expand_path('../../gko_cms_html/gko-categories', __FILE__)
  gem "gko-sticker", :path => File.expand_path('../../gko_cms_html/gko_sticker', __FILE__)
  gem "gko-realty", :path => File.expand_path('../../gko/gko-realty', __FILE__)
  gem 'rails-dev-boost', :git => 'git://github.com/thedarkone/rails-dev-boost.git', :require => 'rails_development_boost'
end