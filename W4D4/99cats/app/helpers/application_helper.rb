module ApplicationHelper
    # all ruby code so no need for erb tags just straight interpolation and ruby code hell yeah
    
    def auth_token
        "<input type=\"hidden\" name=\"authenticity_token\" value=\"#{form_authenticity_token}\">".html_safe
    end
end
