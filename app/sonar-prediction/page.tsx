"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { AlertCircle, FileText, Upload } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function SonarPrediction() {
  const [result, setResult] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [sonarData, setSonarData] = useState("")
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    // Simulate prediction (in a real app, this would call an API)
    setTimeout(() => {
      try {
        // Simple validation
        if (!sonarData.trim()) {
          throw new Error("Please enter sonar data")
        }

        // Mock prediction logic
        const values = sonarData.split(",").map((val) => Number.parseFloat(val.trim()))
        if (values.length < 10) {
          throw new Error("Please provide at least 10 data points")
        }

        // Simple mock algorithm (in reality, this would use a trained ML model)
        const sum = values.reduce((acc, val) => acc + val, 0)
        const prediction = sum / values.length > 0.5 ? "Rock" : "Mine"

        setResult(prediction)
        setLoading(false)
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred")
        setLoading(false)
      }
    }, 1500)
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (event) => {
      const content = event.target?.result as string
      setSonarData(content)
    }
    reader.readAsText(file)
  }

  return (
    <main className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-black to-purple-950">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              Sonar <span className="gradient-text">Rock & Mine</span> Prediction
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              This project uses machine learning to predict whether an object is a rock or a mine based on sonar data.
              Upload your sonar data or enter it manually to get a prediction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-purple-900/40 to-black border border-purple-900/50">
              <CardHeader>
                <CardTitle>How It Works</CardTitle>
                <CardDescription>Understanding the sonar prediction model</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-gray-400">
                  Sonar (sound navigation and ranging) is a technique that uses sound propagation to navigate, measure
                  distances, or detect objects underwater.
                </p>

                <div className="space-y-2">
                  <h3 className="text-sm font-medium">The Model:</h3>
                  <p className="text-sm text-gray-400">
                    Our model is trained on a dataset of sonar signals bounced off rocks and metal cylinders (mines). It
                    analyzes patterns in the signal strength across different frequencies to make predictions.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Data Format:</h3>
                  <p className="text-sm text-gray-400">
                    The input should be a series of comma-separated values representing signal strengths at different
                    frequencies. Each value should be between 0 and 1.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Example:</h3>
                  <p className="text-xs font-mono bg-black/30 p-2 rounded-md overflow-x-auto">
                    0.0200,0.0371,0.0428,0.0207,0.0954,0.0986,0.1539,0.1601,0.3109,0.2111,0.1609
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-900/40 to-black border border-purple-900/50">
              <CardHeader>
                <CardTitle>Make a Prediction</CardTitle>
                <CardDescription>Enter sonar data or upload a file</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="sonarData">Sonar Data (comma-separated values)</Label>
                    <Textarea
                      id="sonarData"
                      value={sonarData}
                      onChange={(e) => setSonarData(e.target.value)}
                      placeholder="Enter comma-separated values (e.g., 0.0200,0.0371,0.0428...)"
                      className="bg-purple-900/20 border-purple-900/50 focus:border-purple-500 focus:ring-purple-500 min-h-[120px]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="fileUpload">Or upload a file</Label>
                    <div className="flex items-center gap-2">
                      <Input
                        id="fileUpload"
                        type="file"
                        accept=".txt,.csv"
                        onChange={handleFileUpload}
                        className="hidden"
                      />
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => document.getElementById("fileUpload")?.click()}
                        className="w-full border-purple-900/50 text-purple-400 hover:bg-purple-900/30"
                      >
                        <Upload className="mr-2 h-4 w-4" />
                        Choose File
                      </Button>
                    </div>
                  </div>

                  {error && (
                    <Alert variant="destructive">
                      <AlertCircle className="h-4 w-4" />
                      <AlertTitle>Error</AlertTitle>
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  )}

                  <Button
                    type="submit"
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                    disabled={loading}
                  >
                    {loading ? "Processing..." : "Predict"}
                  </Button>
                </form>
              </CardContent>

              {result && (
                <CardFooter>
                  <div className="w-full p-4 bg-purple-900/30 rounded-lg border border-purple-900/50">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium">Prediction Result:</h3>
                      <FileText className="h-5 w-5 text-purple-400" />
                    </div>
                    <div className="text-center py-3">
                      <span className="text-2xl font-bold gradient-text">{result}</span>
                    </div>
                    <p className="text-xs text-gray-400 text-center mt-2">
                      This prediction is based on the pattern analysis of the provided sonar data.
                    </p>
                  </div>
                </CardFooter>
              )}
            </Card>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400 text-sm">
              Note: This is a simplified demonstration. A real-world application would use a trained machine learning
              model like Support Vector Machines, Random Forests, or Neural Networks for more accurate predictions.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
