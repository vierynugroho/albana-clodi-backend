# albana-clodi-frontend

Albana Clodi Grosir

# Laporan Keuangan

---

1. Penjualan Kotor
   total hasil penjualan, **TERMASUK** ongkir, asuransi, dan biaya lain

2. Laba Kotor
   penjualan bersih, setelah dikurangi total harga pokok produk

3. Penjualan Bersih
   total hasil penjualan, **TIDAK TERMASUK** ongkir, asuransi, dan biaya lain

4. Pengeluaran
   hasil dari expenses

5. Total Transaksi
   hasil count orders

6. Total Item terjual
   hasil count order dengan status lunas

7. Nilai Produk
   keseluruhan harga produk

<!-- Card Sendiri -->

8. Data transaksi bank
   total orders berdasarkan payment method

9. graph
   order (month:item_terjual)

   dari beli ke penjualan

harga jual = harga normal
contoh: 100k ke enduser

harga kulak = harga
contoh: beli 60k

harga agent :70k

keuntungan 10k

laba bersih (sudah semua, kecuali ongkir (dari customer))
laba kotor (laba bersih, belum dikurangi pengeluaran)

keuntungan
harga order lunas
keuntungan = all_jenis_harga - harga_beli

all_jenis_harga WHEN checkout -> finalPrice WITHOUT otherFees

ambil harga beli di tiap order_product.variant.productPrice.buy

harga_beli = order_product.variant.productPrice.buy
harga_jual = orderDetail.finalPrice WITHOUT otherFees

keuntungan = total_harga_jual = total_harga_beli
