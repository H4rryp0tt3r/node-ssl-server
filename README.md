# Simple Node SSL Server

To run this locally follow below instructions:

    ➜ git clone https://github.com/H4rryp0tt3r/node-ssl-server
    ➜ cd node-ssl-server
    ➜ yarn install (or) npm install
    ➜ node index.js

Below or some commands that I used to generate self-signed cert & private key required for SSL.

To generate a RSA Key with 2048 modulus

    openssl genrsa -out example.key 2048

To create a certificate signing request(CSR)

    openssl req -new -key example.key -days 3650 -out example.csr

To create certificate with the above generated CSR

    openssl x509 -req -days 3650 -in example.csr -signkey example.key -out example.crt
