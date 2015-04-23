source 'https://rubygems.org'

group :assets do
  gem 'sass', '= 3.2.14'
  gem 'sass-rails', '~> 3.2.6'
  gem 'coffee-rails', '~> 3.2.2'
  gem 'uglifier', '~> 2.4.0'
end

group :production do
  git "git@github.com:jdfdesign/gko_cms3.git", :tag => "v0.8.16" do
     gem 'gko_core'
     gem 'gko_auth'
     gem 'gko_documents'
     gem 'gko_inquiries'
     gem 'gko_features'
     gem 'gko_categories'
    gem 'gko_stickers'
  end
  gem 'gko_realty', '= 0.2.7', :git => 'git@github.com:jdfdesign/gko-realty.git'
end

#group :development do
#  gem "gko_core", :path => '~/Github/gko_cms3/gko_core'
#  gem "gko_auth", :path => '~/Github/gko_cms3/gko_auth'
#  gem "gko_documents", :path => '~/Github/gko_cms3/gko_documents'
#  gem "gko_inquiries", :path => '~/Github/gko_cms3/gko_inquiries'
#  gem "gko_features", :path => '~/Github/gko_cms3/gko_features'
#  gem "gko_categories", :path => '~/Github/gko_cms3/gko_categories'
#  gem "gko_stickers", :path => '~/Github/gko_cms3/gko_stickers'
#  gem "gko_realty", :path => '~/Github/gko/gko_realty' 
#end

gem "money", "= 5.0.0"
gem "eu_central_bank", "~> 0.3.2"
gem "whenever", "~> 0.7.3"
gem "nokogiri", "~> 1.5.1"
# https://github.com/Nerian/bootstrap-datepicker-rails
gem 'bootstrap-datepicker-rails', '1.3.1.1'
