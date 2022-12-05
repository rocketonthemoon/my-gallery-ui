function Profile() {
  return (
    <div className="Profile">
      <div className="photo"></div>
      <div className="name blackish">Rodney Cotton</div>
      <div className="region grayish">Helsinki, Finland</div>
      <div className="stats">
        <div className="stat">
          <div className="count blackish">100</div>
          <div className="category grayish">Posts</div>
        </div>
        <div className="stat">
          <div className="count blakish">2,242</div>
          <div className="category grayish">Follower</div>
        </div>
        <div className="stat">
          <div className="count blakish">1,432</div>
          <div className="category grayish">Following</div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
