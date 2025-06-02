import java.util.ArrayList;
import java.util.Scanner;

// Parent class
class Buku {
    protected String judul;
    protected String nama_pengarang;
    protected String penerbit;
    protected int tahun_cetak;
    protected char kategori;

    public Buku(String judul, String nama_pengarang, String penerbit, int tahun_cetak, char kategori) {
        this.judul = judul;
        this.nama_pengarang = nama_pengarang;
        this.penerbit = penerbit;
        this.tahun_cetak = tahun_cetak;
        this.kategori = kategori;
    }

    public void tampilkanInfo() {
        System.out.println("Judul: " + judul);
        System.out.println("Pengarang: " + nama_pengarang);
        System.out.println("Penerbit: " + penerbit);
        System.out.println("Tahun Cetak: " + tahun_cetak);
        System.out.println("Kategori: " + getKategoriLengkap());
    }

    public String getKategoriLengkap() {
        switch (kategori) {
            case 's':
                return "Semua Umur";
            case 'r':
                return "Remaja";
            case 'd':
                return "Dewasa";
            case 'a':
                return "Anak";
            default:
                return "Tidak Diketahui";
        }
    }
}

// Child class untuk buku anak
class BukuAnak extends Buku {
    private String ilustrator;

    public BukuAnak(String judul, String nama_pengarang, String penerbit, int tahun_cetak, String ilustrator) {
        super(judul, nama_pengarang, penerbit, tahun_cetak, 'a');
        this.ilustrator = ilustrator;
    }

    @Override
    public void tampilkanInfo() {
        super.tampilkanInfo();
        System.out.println("Ilustrator: " + ilustrator);
    }
}

// Child class untuk buku remaja
class BukuRemaja extends Buku {
    private String genre;

    public BukuRemaja(String judul, String nama_pengarang, String penerbit, int tahun_cetak, String genre) {
        super(judul, nama_pengarang, penerbit, tahun_cetak, 'r');
        this.genre = genre;
    }

    @Override
    public void tampilkanInfo() {
        super.tampilkanInfo();
        System.out.println("Genre: " + genre);
    }
}

// Child class untuk buku dewasa
class BukuDewasa extends Buku {
    private boolean kontenSensitif;

    public BukuDewasa(String judul, String nama_pengarang, String penerbit, int tahun_cetak, boolean kontenSensitif) {
        super(judul, nama_pengarang, penerbit, tahun_cetak, 'd');
        this.kontenSensitif = kontenSensitif;
    }

    @Override
    public void tampilkanInfo() {
        super.tampilkanInfo();
        System.out.println("Konten Sensitif: " + (kontenSensitif ? "Ya" : "Tidak"));
    }
}

// Aplikasi Toko Buku
public class TokoBuku {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        ArrayList<Buku> daftarBuku = new ArrayList<>();

        System.out.println("=== APLIKASI TOKO BUKU ===");
        
        // Input data buku sebanyak 3 kali
        for (int i = 0; i < 3; i++) {
            System.out.println("\nInput Data Buku ke-" + (i+1));
            System.out.print("Judul: ");
            String judul = scanner.nextLine();
            
            System.out.print("Nama Pengarang: ");
            String nama_pengarang = scanner.nextLine();
            
            System.out.print("Penerbit: ");
            String penerbit = scanner.nextLine();
            
            System.out.print("Tahun Cetak: ");
            int tahun_cetak = Integer.parseInt(scanner.nextLine());
            
            System.out.print("Kategori (s=semua umur, r=remaja, d=dewasa, a=anak): ");
            char kategori = scanner.nextLine().charAt(0);
            
            Buku buku;
            
            switch (kategori) {
                case 'a':
                    System.out.print("Ilustrator: ");
                    String ilustrator = scanner.nextLine();
                    buku = new BukuAnak(judul, nama_pengarang, penerbit, tahun_cetak, ilustrator);
                    break;
                case 'r':
                    System.out.print("Genre: ");
                    String genre = scanner.nextLine();
                    buku = new BukuRemaja(judul, nama_pengarang, penerbit, tahun_cetak, genre);
                    break;
                case 'd':
                    System.out.print("Konten Sensitif (true/false): ");
                    boolean kontenSensitif = Boolean.parseBoolean(scanner.nextLine());
                    buku = new BukuDewasa(judul, nama_pengarang, penerbit, tahun_cetak, kontenSensitif);
                    break;
                default:
                    buku = new Buku(judul, nama_pengarang, penerbit, tahun_cetak, kategori);
                    break;
            }
            
            daftarBuku.add(buku);
        }
        
        // Menampilkan data buku yang telah diinput
        System.out.println("\n=== DAFTAR BUKU ===");
        for (int i = 0; i < daftarBuku.size(); i++) {
            System.out.println("\nBuku ke-" + (i+1));
            daftarBuku.get(i).tampilkanInfo();
            System.out.println("-------------------");
        }
        
        scanner.close();
    }
}
