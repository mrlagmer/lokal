# Start Dev Server

Using Meteor for the build. To start it in dev mode use the following command:

```
meteor --settings development.json
```

# To Deploy

```
nodechef deploy -meteorsettings production.json
```

## Deploy staic assets

cd into the public folder in your local.

```
nodechef deploy -i lokal --statics
```
