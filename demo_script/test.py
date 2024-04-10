import afp_server

import afp_system # Go to this file to view and edit before using

afp_server.OFF_LOG = True
afp_system.afp_server.OFF_LOG = True

# afp_server.BASE_URL = 'YOUR_SERVER_URL'
# afp_server.PASSWORD = 'ADMIN_PASSWORD'


print(afp_server.api_get.getWallets())

# explore more
exit()