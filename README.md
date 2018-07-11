
NodeJS

NodeJS NVM：

```bash
 curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
```


NodeJS v8.9.4 LTS：

```bash
 nvm install 8.9.4
```

Dependencies：

```bash
 npm install pm2 -g
 npm install node-gyp -g
```

## SETUP PACKAGES

DAGCOin-genesis：

```bash
 git clone https://github.com/guantau/byteball-genesis
 cd genesis
 npm install; 
 cd src
 git clone https://github.com/byteball/byteball-explorer
 cd byteball-explorer; npm install; 
 git clone https://github.com/byteball/byteball-hub
 cd byteball-hub; npm install;
 git clone https://github.com/byteball/byteball-witness
 cd byteball-witness; npm install; 
```

## SETUP NETWORK

```bash
 npm run init
```

生成的配置文件位于目录`wallets`中，目录结构为：

![](http://oc7urqs4c.bkt.clouddn.com/2018-04-01-byteball-genesis-wallets.png)

打印`witness`地址：

```bash
 cat witness-address.json
```

修改`conf`目录下的`explorer-conf.js`和`hub-conf.js`，将上述地址填入`exports.initial_witnesses`。

## GENERATE GENESIS

```bash
 npm run genesis
```

运行后将会输出`Genesis unit: `及相应的创世单元hash值，然后终止运行。修改`conf`目录下的`constants.js`，将创世单元hash值填入`exports.GENESIS_UNIT`。

## SETUP NETWORK NODES

```bash
 npm run deploy
```

## RUN LINKED NODES

```bash
 npm run start
```

### show pm2 list

![](http://oc7urqs4c.bkt.clouddn.com/2018-04-01-byteball-genesis-pm2.png)

> Hub: 13 incoming connections, 0 outgoing connections, 0 outgoing connections being opened`。

```bash
 pm2 logs hub
```

## 发布创世单元

```bash
 npm run genesis
```

运行成功后，可以在`http://127.0.0.1:4000/`上查看创世单元。


## 开启支付测试

```bash
 npm run payment
```

开启支付测试，每30s发起一次支付（**注意：需要等待第1个单元到达稳定后开启**）。

