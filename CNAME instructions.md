Next you will need to update the DNS records for your domain name. This is usually done through a control panel provided by your domain registrar.

If you want to use a root domain (such as teamtreehouse.com) for your website you will need to setup a new A record that points to the IP address 204.232.175.78.

If you are using a subdomain (such as blog.teamtreehouse.com) it’s best to create a new CNAME record that points to your GitHub user subdomain (**username**.github.io). This is so that the DNS will be automatically adjusted if the servers IP address changes on GitHub.


It may take a little while for your DNS changes to take effect. This is usually no more than a few hours. Once the changes have gone through, you should be able to access your new website from your custom domain name.

