export type DataSource = {
  label: string;
  imageSrc: string;
  id: number;
  // Additional properties by which we can sort/filter. In this case, whether or not I've heard of the service.
  tags: { haveHeardOf: boolean };
};

// Mock data for the DataSources compoenent
const dataSourcesMock: Array<DataSource> = [
  {
    label: "MongoDB",
    imageSrc: "/icons/dataSources/mongo-db.svg",
    id: 1,
    tags: { haveHeardOf: true },
  },
  {
    label: "Postgress",
    imageSrc: "/icons/dataSources/postgresql.svg",
    id: 2,
    tags: { haveHeardOf: true },
  },
  {
    label: "MySQL",
    imageSrc: "/icons/dataSources/my-sql.svg",
    id: 3,
    tags: { haveHeardOf: true },
  },
  {
    label: "Microsoft Access",
    imageSrc: "/icons/dataSources/microsoft-access.svg",
    id: 4,
    tags: { haveHeardOf: true },
  },
  {
    label: "Airtable",
    imageSrc: "/icons/dataSources/airtable.svg",
    id: 5,
    tags: { haveHeardOf: false },
  },
  {
    label: "S3",
    imageSrc: "/icons/dataSources/aws-s3.svg",
    id: 6,
    tags: { haveHeardOf: true },
  },
  {
    label: "Cassandra",
    imageSrc: "/icons/dataSources/cassandra.svg",
    id: 7,
    tags: { haveHeardOf: false },
  },
  {
    label: "Clickhouse",
    imageSrc: "/icons/dataSources/clickhouse.svg",
    id: 8,
    tags: { haveHeardOf: false },
  },
  {
    label: "Couchbase",
    imageSrc: "/icons/dataSources/couchbase.svg",
    id: 9,
    tags: { haveHeardOf: false },
  },
  {
    label: "CreateDB",
    imageSrc: "/icons/dataSources/createdb.svg",
    id: 10,
    tags: { haveHeardOf: false },
  },
  {
    label: "d0lt",
    imageSrc: "/icons/dataSources/d0ltdb.svg",
    id: 11,
    tags: { haveHeardOf: false },
  },
];

export default dataSourcesMock;
