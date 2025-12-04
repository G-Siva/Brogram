import React, { useState } from "react"
import Modal from "./Modal"
import { exerciseDescriptions } from "../utils"

export default function WorkoutCard(props) {
    const { trainingPlan, workoutIndex, type, dayNum, icon, savedWeights, handleSave, handleComplete } = props

    const { warmup, workout } = trainingPlan || {}
    const [showExerciseDescription, setShowExerciseDescription] = useState(null)
    const [weights, setWeights] = useState(savedWeights || {})

    function handleAddWeight(title, weight) {
        const newObj = {
            ...weights,
            [title]: weight
        }
        setWeights(newObj)
    }

    return (
        <div className="workout-container glass">
            {showExerciseDescription && (
                <Modal showExerciseDescription={showExerciseDescription} handleCloseModal={() => {
                    setShowExerciseDescription(null)
                }} />
            )}
            <div className="workout-card">
                <div className="plan-card-header">
                    <p className="text-sm font-bold text-tertiary">Day {dayNum}</p>
                    {icon}
                </div>
                <div className="plan-card-header mt-2">
                    <h2 className="text-2xl text-gradient"><b>{type} Workout</b></h2>
                </div>
            </div>


            <div className="workout-grid mt-4">
                <div className="exercise-name">
                    <h4 className="text-accent">Warmup</h4>
                </div>
                <h6 className="text-xs text-tertiary">Sets</h6>
                <h6 className="text-xs text-tertiary">Reps</h6>
                <h6 className="weight-input text-xs text-tertiary">Max Weight</h6>
                {warmup.map((warmupExercise, warmupIndex) => {
                    return (
                        <React.Fragment key={warmupIndex}>
                            <div className="exercise-name">
                                <p className="text-sm"><span className="font-bold text-tertiary">{warmupIndex + 1}.</span> {warmupExercise.name}</p>
                                <button onClick={() => {
                                    setShowExerciseDescription({
                                        name: warmupExercise.name,
                                        description: exerciseDescriptions[warmupExercise.name]
                                    })
                                }} className="help-icon text-accent hover:text-white transition-colors">
                                    <i className="fa-regular fa-circle-question" />
                                </button>
                            </div>
                            <p className="exercise-info text-sm">{warmupExercise.sets}</p>
                            <p className="exercise-info text-sm">{warmupExercise.reps}</p>
                            <input className="weight-input bg-transparent border-none text-center" placeholder="-" disabled />
                        </React.Fragment>
                    )
                })}
            </div>

            <div className="workout-grid mt-4">
                <div className="exercise-name">
                    <h4 className="text-accent">Workout</h4>
                </div>
                <h6 className="text-xs text-tertiary">Sets</h6>
                <h6 className="text-xs text-tertiary">Reps</h6>
                <h6 className="weight-input text-xs text-tertiary">Max Weight</h6>
                {workout.map((workoutExercise, wIndex) => {
                    return (
                        <React.Fragment key={wIndex}>
                            <div className="exercise-name">
                                <p className="text-sm"><span className="font-bold text-tertiary">{wIndex + 1}.</span> {workoutExercise.name}</p>
                                <button onClick={() => {
                                    setShowExerciseDescription({
                                        name: workoutExercise.name,
                                        description: exerciseDescriptions[workoutExercise.name]
                                    })
                                }} className="help-icon text-accent hover:text-white transition-colors">
                                    <i className="fa-regular fa-circle-question" />
                                </button>
                            </div>
                            <p className="exercise-info text-sm">{workoutExercise.sets}</p>
                            <p className="exercise-info text-sm">{workoutExercise.reps}</p>
                            <input value={weights[workoutExercise.name] || ''} onChange={(e) => {
                                handleAddWeight(workoutExercise.name, e.target.value)
                            }} className="weight-input bg-tertiary/20 border border-tertiary/30 rounded p-1 text-center focus:border-accent outline-none transition-colors" placeholder="14" />
                        </React.Fragment>
                    )
                })}
            </div>


            <div className="workout-buttons flex gap-4 mt-6">
                <button onClick={() => {
                    handleSave(workoutIndex, { weights })
                }} className="flex-1 py-2 rounded border border-accent text-accent hover:bg-accent hover:text-white transition-all">Save & Exit</button>
                <button onClick={() => {
                    handleComplete(workoutIndex, { weights })
                }} disabled={Object.keys(weights).length !== workout.length} className="flex-1 py-2 rounded bg-accent text-white hover:bg-accent/80 disabled:opacity-50 disabled:cursor-not-allowed transition-all">Complete</button>
            </div>
        </div>
    )
}