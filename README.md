# Currency Arbitrage finder

A web application designed to find arbitrage (negative cycles) in currency.

## What is an arbitrage?

Arbitrage is defined as near simultaneous purchase and sale of securities or foreign exchange in different markets in order to profit from price discrepancies.

Basicly meaning finding a path of exchanged in which you end up with more money than when you started.

We can simply view currency exchanges as a graph and using Bellman Ford Algorithm we're able to find said cycles.

## App usage

main page:

<img src="https://raw.githubusercontent.com/GabiCtrlZ/Currency/master/packages/readme-pics/main-screen.jpeg" alt="MainScreen" />


Search for every coin you want (or just get the best available routes regardless of the coin)

<img src="https://raw.githubusercontent.com/GabiCtrlZ/Currency/master/packages/readme-pics/search-tab.jpeg" alt="search"
	width="430" height="570" />

Choose the path (optimal path is determined by profit per action)

<img src="https://raw.githubusercontent.com/GabiCtrlZ/Currency/master/packages/readme-pics/possible-routes.jpeg" alt="routes"
	width="550" height="570" />

Enjoy

<img src="https://raw.githubusercontent.com/GabiCtrlZ/Currency/master/packages/readme-pics/enjoy.jpeg" alt="enjoy"
	width="750" height="570" />



## Configuration

### /packages/api/.env

```bash
PORT=
COOKIE_NAME=
CLIENT_BUILD_PATH=
LOCAL_DEV=
API_URL=

```

### .env

```bash
PATH_NGINX_CONF=

```

