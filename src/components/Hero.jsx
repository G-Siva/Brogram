export default function Hero() {
    return (
        <>
            <h5>Complete this training program if you want to ...</h5>
            <div className="benefits-list grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="card-hover glass p-4 rounded">
                    <p className="font-bold text-accent mb-2">1. Guaranteed Results</p>
                    <p className="text-sm">Follow a simple program with guaranteed results</p>
                </div>
                <div className="card-hover glass p-4 rounded">
                    <p className="font-bold text-accent mb-2">2. Get Shredded</p>
                    <p className="text-sm">Get fit, healthy, strong and shredded</p>
                </div>
                <div className="card-hover glass p-4 rounded">
                    <p className="font-bold text-accent mb-2">3. Learn Technique</p>
                    <p className="text-sm">Learn more about gym, training and technique</p>
                </div>
                <div className="card-hover glass p-4 rounded">
                    <p className="font-bold text-accent mb-2">4. Lifetime Bro</p>
                    <p className="text-sm">Become a lifetime gym bro 💛</p>
                </div>
            </div>
            <h3>The Rules</h3>
            <p>To complete this program, you <b>MUST</b> follow these 3 simple rules:</p>
            <div className="rules-list flex flex-col gap-4">
                <div className="rule-item card-hover">
                    <p><b>Rest</b></p>
                    <p>Ensure that you are taking rest days where necessary</p>
                </div>
                <div className="rule-item card-hover">
                    <p><b>Reps</b></p>
                    <p>Every rep is a pause rep following a <abbr title="2 seconds down - 2 seconds pause - 2 seconds up" className="text-accent underline decoration-dotted">2 - 2 - 2 tempo</abbr></p>
                </div>
                <div className="rule-item card-hover">
                    <p><b>Weight*</b></p>
                    <p>Select the maximum weight that allows you to complete the set with good form</p>
                </div>
            </div>
            <small className="block mt-4 text-tertiary">* The first and second set should be at 75% and 85% of you working weight used for the last two sets.</small>
            <h3>The Training Plan</h3>
            <p>This training plan uses a structure know as the <b>Bro Split</b>, and follows this rotation ⬇️</p>
            <p className="text-lg font-semibold text-accent"><b><i>Push &rarr; Pull &rarr; Legs &rarr; Repeat</i></b></p>
            <p>Complete all of the workouts below and track your progress along the way ✅</p>
        </>

    )
}