if Rails.env == "production" 
  WickedPdf.config = {
    :exe_path => '/home/missim/ruby/gems/bin/wkhtmltopdf'
  }
end
