import seed from 'meteor/themeteorchef:seeder';

let _seedUsers = () => {
  seed( 'users', {
    environments: [ 'development', 'staging', 'production' ],
    data: [{
      username: 'bigguy1991',
      email: 'admin@admin.com',
      password: 'password',
      profile: {
        name: { first: 'Carl', last: 'Winslow' }
      },
      roles: [ 'admin' ]
    },{
      username: 'beetsfan123',
      email: 'doug@admin.com',
      password: 'password',
      profile: {
        name: { first: 'Doug', last: 'Funnie' }
      },
      roles: [ 'admin' ]
    }]
  });
};

let _seedChannels = () => {
  seed( 'channels', {
    environments: [ 'development', 'staging', 'production' ],
    data: [ { name: 'general' } ]
  });
};

export default function() {
  _seedUsers();
  _seedChannels();
}
