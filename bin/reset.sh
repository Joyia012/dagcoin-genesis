#!/bin/bash

SYSTEM=`uname -s`
if [ $SYSTEM = "Darwin" ] ; then
    APPDIR="$HOME/Library/Application Support"
elif [ $SYSTEM = "Linux" ] ; then
    APPDIR="$HOME/.config"
else
    echo "Unsupported system"
    exit -1
fi

cd `dirname $0`

pm2 delete all

rm "$APPDIR"/hub/byteball*
rm "$APPDIR"/explorer/byteball*

rm "$APPDIR"/wallet-genesis/byteball*
rm "$APPDIR"/wallet-paying/byteball*
rm "$APPDIR"/wallet-payee/byteball*

for i in {1..7}
do
    rm "$APPDIR"/wallet-witness$i/byteball*
done

echo All database has been deleted
