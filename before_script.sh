echo apiKey $apiKey
echo authDomain ${authDomain}
echo EnvdatabaseURL $EnvdatabaseURL

sed -i 's/EnvapiKey/$apiKey/g' src/app/config/config.ts
sed -i 's/EnvauthDomain/${authDomain}/g' src/app/config/config.ts
sed -i 's/EnvdatabaseURL/${databaseURL}/g' src/app/config/config.ts
sed -i 's/EnvstorageBucket/${storageBucket}/g' src/app/config/config.ts
sed -i 's/EnvmessagingSenderId/${messagingSenderId}/g' src/app/config/config.ts