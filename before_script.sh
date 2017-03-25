echo before_script test scenerio
echo apiKey $apiKey
echo authDomain ${authDomain}
echo EnvdatabaseURL $EnvdatabaseURL

sed -ie 's/EnvapiKey/$apiKey/g' src/app/config/config.ts
sed -ie 's/EnvauthDomain/${authDomain}/g' src/app/config/config.ts
sed -ie 's/EnvdatabaseURL/${databaseURL}/g' src/app/config/config.ts
sed -ie 's/EnvstorageBucket/${storageBucket}/g' src/app/config/config.ts
sed -ie 's/EnvmessagingSenderId/${messagingSenderId}/g' src/app/config/config.ts