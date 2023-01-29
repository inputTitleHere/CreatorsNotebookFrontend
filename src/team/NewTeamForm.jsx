export function NewTeamForm(){

  // action으로 대체할것
  const submitForm=(e)=>{
    e.preventDefault();
  }

  return (
    <div className="new-team-form-wrapper">
      <form onSubmit={submitForm}>
        폼
      </form>
    </div>
  )
}