import React, { Component } from "react";
import { Pagination } from "react-bootstrap";

<Pagination>
  {page !== 1 && <Pagination.Previous />}
  {page !== 1 && <Pagination.Item> {page - 1}</Pagination.Item>}
  {page > 2 && <Pagination.Item>1</Pagination.Item>}
  {page > 2 && <Pagination.Ellipsis />}
  <Pagination.Item> active{page}</Pagination.Item>
  {hasNextPage && <Pagination.Item> {page + 1}</Pagination.Item>}
  {hasNextPage && <Pagination.Next></Pagination.Next>}
</Pagination>;
