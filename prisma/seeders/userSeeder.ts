import { PrismaClient, Roles } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export async function UserSeeder() {
	try {
		console.log("Seeding users...");

		// Hapus semua user yang ada (opsional)
		await prisma.user.deleteMany({});

		// Buat password yang di-hash
		const hashedPasswordSuperAdmin = await bcrypt.hash("superadmin-albana-clodi-250425", 10);
		const hashedPasswordAdmin = await bcrypt.hash("admin-albana-clodi-123", 10);

		// Buat akun superadmin
		const superadmin = await prisma.user.create({
			data: {
				email: "superadmin@albana.com",
				password: hashedPasswordSuperAdmin,
				fullname: "Alfina Albana",
				role: Roles.SUPERADMIN,
				phoneNumber: "081234567890",
			},
		});
		console.log(`Superadmin created: ${superadmin.email}`);

		// Buat 10 akun admin
		const admin1 = await prisma.user.create({
			data: {
				email: "admin1@albana.com",
				password: hashedPasswordAdmin,
				fullname: "Admin Satu",
				role: Roles.ADMIN,
				phoneNumber: "081234567891",
			},
		});
		console.log(`Admin 1 created: ${admin1.email}`);

		const admin2 = await prisma.user.create({
			data: {
				email: "admin2@albana.com",
				password: hashedPasswordAdmin,
				fullname: "Admin Dua",
				role: Roles.ADMIN,
				phoneNumber: "081234567892",
			},
		});
		console.log(`Admin 2 created: ${admin2.email}`);

		const admin3 = await prisma.user.create({
			data: {
				email: "admin3@albana.com",
				password: hashedPasswordAdmin,
				fullname: "Admin Tiga",
				role: Roles.ADMIN,
				phoneNumber: "081234567893",
			},
		});
		console.log(`Admin 3 created: ${admin3.email}`);

		const admin4 = await prisma.user.create({
			data: {
				email: "admin4@albana.com",
				password: hashedPasswordAdmin,
				fullname: "Admin Empat",
				role: Roles.ADMIN,
				phoneNumber: "081234567894",
			},
		});
		console.log(`Admin 4 created: ${admin4.email}`);

		const admin5 = await prisma.user.create({
			data: {
				email: "admin5@albana.com",
				password: hashedPasswordAdmin,
				fullname: "Admin Lima",
				role: Roles.ADMIN,
				phoneNumber: "081234567895",
			},
		});
		console.log(`Admin 5 created: ${admin5.email}`);

		const admin6 = await prisma.user.create({
			data: {
				email: "admin6@albana.com",
				password: hashedPasswordAdmin,
				fullname: "Admin Enam",
				role: Roles.ADMIN,
				phoneNumber: "081234567896",
			},
		});
		console.log(`Admin 6 created: ${admin6.email}`);

		const admin7 = await prisma.user.create({
			data: {
				email: "admin7@albana.com",
				password: hashedPasswordAdmin,
				fullname: "Admin Tujuh",
				role: Roles.ADMIN,
				phoneNumber: "081234567897",
			},
		});
		console.log(`Admin 7 created: ${admin7.email}`);

		const admin8 = await prisma.user.create({
			data: {
				email: "admin8@albana.com",
				password: hashedPasswordAdmin,
				fullname: "Admin Delapan",
				role: Roles.ADMIN,
				phoneNumber: "081234567898",
			},
		});
		console.log(`Admin 8 created: ${admin8.email}`);

		const admin9 = await prisma.user.create({
			data: {
				email: "admin9@albana.com",
				password: hashedPasswordAdmin,
				fullname: "Admin Sembilan",
				role: Roles.ADMIN,
				phoneNumber: "081234567899",
			},
		});
		console.log(`Admin 9 created: ${admin9.email}`);

		const admin10 = await prisma.user.create({
			data: {
				email: "admin10@albana.com",
				password: hashedPasswordAdmin,
				fullname: "Admin Sepuluh",
				role: Roles.ADMIN,
				phoneNumber: "081234567810",
			},
		});
		console.log(`Admin 2 created: ${admin2.email}`);

		console.log("User seeding completed successfully");
	} catch (error) {
		console.error("Error seeding users:", error);
	}
}
