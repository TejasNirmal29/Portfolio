import Loading from "@components/Loading";
import AppLayout from "@layouts/index";
import { Flex } from "antd";
import React from "react";

function PageLoading() {
  return (
    <AppLayout>
      <Flex
        justify="center"
        align="center"
        style={{ minHeight: `calc(100dvh - var(--header-height))` }}
      >
        <Loading />
      </Flex>
    </AppLayout>
  );
}

export default PageLoading;
