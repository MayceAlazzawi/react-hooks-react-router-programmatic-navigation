function Home({ isSignedIn }) {
  if (!isSignedIn) return <Redirect to="/login" />;

  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
}