## Getting docker hub credentials
Go to https://hub.docker.com/.
Click on your profile and go to your account settings.
Click on the Security tab and press the New Access Token button.
As a description, write GitHub Actions and press the Generate button. Give Read, Write, Delete permissions.
Copy the access token and store it in a safe place.
Go to your GitHub repository and then go to Settings | Secrets and variables | Actions.
Press the New repository secret button to add a new secret. As a name, write DOCKERHUB_USERNAME, and as a secret value, use your username on Docker Hub.
Add another secret with the name DOCKERHUB_TOKEN and paste your previously createdaccess token as the secret value.

## Getting googlecloud credentials
Go to https://console.cloud.google.com/.
In the search box on the top, enter Service accounts and go to the IAM and admin – Service
accounts page.
Press the Create Service Account button.
In the Service account name box, enter GitHub Actions. The ID should automatically be
generated as github-actions. Press Create and Continue.
Grant the service access to the Cloud Run Admin role and press Continue.
Press Done to finish creating the service account.
On the overview list, copy the email of your newly created service account and save it for later use.
Go to the default compute service account by clicking on its email address. Go to the Permissions tab and press Grant Access.
Paste the email of your newly created service account into the New principals field and assign the Cloud Run Service Agent role. Press Save to confirm.
On the overview list, press the three dots icon to open actions on your github-actions service account and select Manage keys.
On the new page, press Add Key | Create New Key, and press Create in the popup. A JSON file should be downloaded.
Go to your GitHub repository, and go to Settings | Secrets and variables | Actions. Press the New repository secret button to add a new secret.
Add a new secret on your GitHub repository called GOOGLECLOUD_SERVICE_ACCOUNT and paste the previously copied email of your newly created service account as a secret value.
Add a new secret on your GitHub repository called GOOGLECLOUD_CREDENTIALS and as the secret, paste in the contents of the downloaded JSON file.
Add a new secret on your GitHub repository called GOOGLECLOUD_REGION and set the secret value to the region you selected when creating the Cloud Run services.