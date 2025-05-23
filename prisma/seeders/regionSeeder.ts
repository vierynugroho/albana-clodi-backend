import { PrismaClient } from "@prisma/client";
import Cities from "../../public/data/cities_convert.json";
import Districts from "../../public/data/districts_convert.json";
import Provinces from "../../public/data/provinces_convert.json";
import Villages from "../../public/data/villages_convert.json";

const prisma = new PrismaClient();

const BATCH_SIZE = 100;

const batchInsert = async <T>(
	model: { createMany: (args: { data: T[]; skipDuplicates?: boolean }) => Promise<{ count: number }> },
	data: T[],
) => {
	for (let i = 0; i < data.length; i += BATCH_SIZE) {
		const batch = data.slice(i, i + BATCH_SIZE);
		await model.createMany({
			data: batch,
			skipDuplicates: true,
		});
	}
};

export async function RegionSeeder() {
	const provincesData = Provinces.map((province) => ({
		id: BigInt(province.id),
		name: province.name,
	}));

	const citiesData = Cities.map((city) => ({
		id: BigInt(city.id),
		provinceId: BigInt(city.provinsi_id),
		name: city.name,
	}));

	const districtsData = Districts.map((district) => ({
		id: BigInt(district.id),
		cityId: BigInt(district.kabupaten_id),
		name: district.name,
	}));

	const villagesData =
		Array.isArray(Villages) &&
		Villages.map((village) => ({
			id: BigInt(village.id),
			districtId: BigInt(village.kecamatan_id),
			name: village.name,
			postalCode: village.pos_code ? Number(village.pos_code) : null,
		}));

	console.log("Starting region seed...");

	console.time("Provinces seeding");
	await batchInsert(prisma.province, provincesData);
	console.timeEnd("Provinces seeding");

	console.time("Cities seeding");
	await batchInsert(prisma.city, citiesData);
	console.timeEnd("Cities seeding");

	console.time("Districts seeding");
	await batchInsert(prisma.district, districtsData);
	console.timeEnd("Districts seeding");

	if (villagesData) {
		console.time("Villages seeding");
		await batchInsert(prisma.village, villagesData);
		console.timeEnd("Villages seeding");
	}

	console.log("Region seeding complete.");
}
