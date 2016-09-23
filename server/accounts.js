Accounts.onCreateUser(function(options,user){
	user.intercomHash = IntercomHash(user,'Q5qoIe3rDazPEFQveRRQZv6fa5L3ZVmWEGYO5a-2');

	if(options.profile)
		user.profile = options.profile;

	return user;
});
