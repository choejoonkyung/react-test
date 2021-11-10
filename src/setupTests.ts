// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import { server } from "./mocks/server";

// MSW 세팅
// 모든 테스트 전에 서버를 작동 시킨다.
// 각각의 테스트가 끝나면 핸들러를 리셋한다.
// 최종적으로 모든 테스트가 끝난다면 서버를 닫는다.
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
