import { DeleteObjectCommand, PutObjectCommand, S3Client } from "@aws-sdk/client-s3";

interface AwsConfig {
	cloudCubeBucket: string;
	cloudCubeUrl: string;
	cloudCubeRegion: string;
	cloudCubeAccessKey: string;
	cloudCubeSecretKey: string;
}

export class AwsService {
	private s3: S3Client;
	private readonly bucket: string;
	private readonly cubeUrl: string;

	constructor(config: AwsConfig) {
		this.bucket = config.cloudCubeBucket;
		this.cubeUrl = config.cloudCubeUrl;

		this.s3 = new S3Client({
			region: config.cloudCubeRegion,
			credentials: {
				accessKeyId: config.cloudCubeAccessKey,
				secretAccessKey: config.cloudCubeSecretKey,
			},
		});
	}

	public uploadFile = async (file: Express.Multer.File): Promise<string> => {
		const prefix = this.cubeUrl.split(".com/")[1];
		const fileName = `${Date.now()}-${file.originalname}`;
		const key = `${prefix}/${fileName}`;

		try {
			await this.s3.send(
				new PutObjectCommand({
					Bucket: this.bucket,
					Key: key,
					Body: file.buffer,
					ContentType: file.mimetype,
					ACL: "public-read",
				}),
			);

			return `${this.cubeUrl}/${fileName}`;
		} catch (error) {
			console.error("Upload error:", error);
			throw error;
		}
	};

	public deleteFile = async (key: string): Promise<boolean> => {
		try {
			await this.s3.send(
				new DeleteObjectCommand({
					Bucket: this.bucket,
					Key: key,
				}),
			);
			return true;
		} catch (error) {
			console.error("Delete error:", error);
			return false;
		}
	};

	public extractKeyFromUrl = (url: string): string => {
		const urlObj = new URL(url);
		return urlObj.pathname.slice(1);
	};
}
