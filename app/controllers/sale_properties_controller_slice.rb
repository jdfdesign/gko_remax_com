require 'sale_properties_controller'
SalePropertiesController.class_eval do
  
  before_filter :load_city, :only => :show

 protected
   def load_resources
	 params[:page] = (params[:search][:page] || 1) if searching?
     load_city
     end_of_association_chain.includes(:images, :meta).published.in_city(@city.id).with_translations(I18n.locale)
   end
   
   def load_city
     @city = parent.name == "sxm" ? site.cities.last : site.cities.first
   end

end