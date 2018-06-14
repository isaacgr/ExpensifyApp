import { login, logout } from '../../actions/auth';

test('should setup login object', () => {
  const action = login('1234');
  expect(action).toEqual({
    type: 'LOGIN',
    uid: '1234'
  })
})

test('should setup logout object', () => {
  const action = logout();
  expect(action).toEqual({
    type: 'LOGOUT',
  })
})
