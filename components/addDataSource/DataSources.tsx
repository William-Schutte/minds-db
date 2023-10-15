import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import DataSourceItem from "./DataSourceItem";
import { useDispatch, useSelector } from "react-redux";
import { DataSource } from "@/redux/slices/dataSourcesMock";
import {
  selectDataSource,
  selectItemsByQueryAndFilter,
} from "@/redux/slices/dataSourcesSlice";
import { useRouter } from "next/router";

const QueryInputContainer = styled.div`
  border: 1px solid ${(props) => props.theme.colors.zinc200};
  padding: 8px 12px;
  border-radius: 6px;
  max-width: 320px;
  min-width: 200px;
  display: flex;
  flex-grow: 1;
  align-items: center;
  gap: 8px;
`;

const QueryInputField = styled.input`
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  font-size: 14px;
  line-height: 24px;
  color: ${(props) => props.theme.colors.zinc500};

  &:focus {
    outline: none;
  }
`;

const FilterDropdown = styled.select`
  border: 1px solid ${(props) => props.theme.colors.zinc200};
  color: ${(props) => props.theme.colors.zinc950};
  border-radius: 6px;
  padding: 10px 44px 10px 12px;
  appearance: none;
  background-image: url(/icons/general/select.svg);
  background-repeat: no-repeat;
  background-position: right 12px center;
  font-size: 14px;
  line-height: 20px;
`;

const SourcesContainer = styled.div`
  max-width: 1024px;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

export default function DataSources() {
  // Router for proceding to next page on source select
  const router = useRouter();

  // State for query search and filterBy
  const [queryText, setQueryText] = useState("");
  const [filterBy, setFilterBy] = useState("");
  const dispatch = useDispatch();

  // Pull in data sources from Redux store using above query and filter
  const dataSources: Array<DataSource> = useSelector((state) =>
    selectItemsByQueryAndFilter(state, queryText, filterBy)
  );

  return (
    <>
      {/* Search and Filter Section */}
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          marginBottom: "16px",
        }}
      >
        <QueryInputContainer>
          <Image
            width={16}
            height={16}
            src="/icons/general/search.svg"
            alt="Search Icon"
          />
          <QueryInputField
            type="text"
            placeholder="Search"
            value={queryText}
            onChange={(e) => setQueryText(e.target.value)}
          />
        </QueryInputContainer>
        {/* Obviously this filter is dumb but it as an example of how filtering by some 
        additional property would work */}
        <FilterDropdown onChange={(e) => setFilterBy(e.target.value)}>
          <option value="">Filter by</option>
          <option value="haveHeardOf">Will has heard of</option>
          <option value="haveNotHeardOf">Will has not heard of</option>
        </FilterDropdown>
      </div>
      {/* Data Sources Grid */}
      <SourcesContainer>
        {dataSources.map((item) => (
          <DataSourceItem
            dataSource={item}
            onClick={() => {
              dispatch(selectDataSource(item.id));
              router.push("credentials");
            }}
            key={item.id}
          />
        ))}
      </SourcesContainer>
    </>
  );
}
