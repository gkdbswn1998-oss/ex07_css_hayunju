import { createAsyncThunk } from "@reduxjs/toolkit";

let data_set = [
  { username: "aaa", password: "aaa", role: "USER" },
  { username: "bbb", password: "bbb", role: "USER" },
  { username: "ccc", password: "ccc", role: "USER" },
];

export const loginThunk = createAsyncThunk(
  "loginThunk",
  async (user) => {
    const data = data_set.filter(data => data.username === user.username)[0];
    let result = 1;
    if (data?.password === user.password)
      result = 0;
    return { result, username: user.username };
  }
);

export const registerThunk = createAsyncThunk(
  "registerThunk",
  async (user) => {
    console.log("회원가입 데이터:", user);
    data_set.push(user);
    return user;
  }
);


export const getMemberListThunk = createAsyncThunk(
    "member/getList",
    async () => {
        return [...data_set]; 
    }
);

export const deleteMemberThunk = createAsyncThunk(
    "member/delete",
    async (username) => {
        data_set = data_set.filter(m => m.username !== username);
        return username;
    }
);

export const updateMemberThunk = createAsyncThunk(
    "member/update",
    async (updateUser) => {
        data_set = data_set.map(m => 
            m.username === updateUser.username ? updateUser : m
        );
        return updateUser;
    }
);