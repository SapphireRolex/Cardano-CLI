testnet="--testnet-magic 2"
address=$(cat base.addr)
address_skey="payment.skey"
cardano-cli query utxo $testnet --address $address

#chỉnh sửa lại giá trị các biến
BOB_ADDR="addr_test1qz8shh6wqssr83hurdmqx44js8v7tglg9lm3xh89auw007dd38kf3ymx9c2w225uc7yjmplr794wvc96n5lsy0wsm8fq9n5epq"
VALUE=1000000

UTXO_IN=cccfd8642e237ea1d7465a42d3851d1a7902ba9abb9fab46b1b12b69df02ef4b#2

# B1. Xây dựng giao dịch (Build Tx)


cardano-cli conway transaction build $testnet \
--tx-in $UTXO_IN \
--tx-out $BOB_ADDR+$VALUE \
--change-address $address \
--out-file simple-tx.raw

# B2. Ký giao dịch (Sign Tx)

cardano-cli conway transaction sign $testnet \
--signing-key-file $address_skey \
--tx-body-file simple-tx.raw \
--out-file simple-tx.signed

# B3. Gửi giao dịch (Submit Tx)

cardano-cli conway transaction submit $testnet \
--tx-file simple-tx.signed
