"use client"

import { useState } from "react"
import Layout from '../../components/Layout/Layout'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"

type PersonalInfoData = {
  fullName: string
  education: string
  work: string
  projects: string
  volunteer: string
  skills: string
  selectedTemplate: string
}

export default function FormPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<PersonalInfoData>({
    fullName: "",
    education: "",
    work: "",
    projects: "",
    volunteer: "",
    skills: "",
    selectedTemplate: ""
  })

  const updateFormData = (field: keyof PersonalInfoData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3))
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1))

  const handleSubmit = () => {
    console.log("Form submitted:", formData)
    setFormData({
      fullName: "",
      education: "",
      work: "",
      projects: "",
      volunteer: "",
      skills: "",
      selectedTemplate: ""
    })
    setStep(1)
  }

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4">
            <div className="space-y-1">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                value={formData.fullName}
                onChange={(e) => updateFormData("fullName", e.target.value)}
                placeholder="John Doe"
                required
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="education">Education</Label>
              <Input
                id="education"
                value={formData.education}
                onChange={(e) => updateFormData("education", e.target.value)}
                placeholder="Harvard University"
                required
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="work">Work Experiences</Label>
              <Input
                id="work"
                value={formData.work}
                onChange={(e) => updateFormData("work", e.target.value)}
                placeholder="Google"
                required
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="projects">Projects</Label>
              <Input
                id="projects"
                value={formData.projects}
                onChange={(e) => updateFormData("projects", e.target.value)}
                placeholder="OpenAI"
                required
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="volunteer">Volunteer</Label>
              <Input
                id="volunteer"
                value={formData.volunteer}
                onChange={(e) => updateFormData("volunteer", e.target.value)}
                placeholder="UN"
                required
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="skills">Relevant Skills</Label>
              <Input
                id="skills"
                value={formData.skills}
                onChange={(e) => updateFormData("skills", e.target.value)}
                placeholder="Coding, Excel, etc"
                required
              />
            </div>
          </div>
        )
      case 2:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Choose a Resume Template</h3>
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="template"
                  value="Template A"
                  checked={formData.selectedTemplate === "Template A"}
                  onChange={(e) => updateFormData("selectedTemplate", e.target.value)}
                />
                <span>Template A</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="template"
                  value="Template B"
                  checked={formData.selectedTemplate === "Template B"}
                  onChange={(e) => updateFormData("selectedTemplate", e.target.value)}
                />
                <span>Template B</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="template"
                  value="Template C"
                  checked={formData.selectedTemplate === "Template C"}
                  onChange={(e) => updateFormData("selectedTemplate", e.target.value)}
                />
                <span>Template C</span>
              </label>
            </div>
          </div>
        )
      case 3:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Review Your Information</h3>
            <p><strong>Full Name:</strong> {formData.fullName}</p>
            <p><strong>Education:</strong> {formData.education}</p>
            <p><strong>Work Experience:</strong> {formData.work}</p>
            <p><strong>Projects:</strong> {formData.projects}</p>
            <p><strong>Volunteer:</strong> {formData.volunteer}</p>
            <p><strong>Skills:</strong> {formData.skills}</p>
            <p><strong>Selected Template:</strong> {formData.selectedTemplate}</p>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-xl md:text-4xl font-bold tracking-tighter">Generate Resumes</h1>
      </div>
      <main className="container mx-auto py-6 flex justify-center">
        <Card className="w-1/2">
          <CardHeader>
            <CardTitle>
              {step === 1 ? "Personal Information"  : step === 2 ? "Resume Templates" : "Finally."}
            </CardTitle>
            <CardDescription>
              {step === 1 ? "Enter your personal best information." : step === 2 ? "Select the best template of your choice." : "Review your information. Make sure it is all about you."}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Progress value={(step / 3) * 100} className="mb-4" />
            {renderStep()}
          </CardContent>
          <CardFooter className="flex justify-between">
            {step > 1 && (
              <Button variant="outline" onClick={prevStep}>Previous</Button>
            )}
            {step < 3 ? (
              <Button onClick={nextStep}>Next</Button>
            ) : (
              <Button onClick={handleSubmit}>Generate Resume</Button>
            )}
          </CardFooter>
        </Card>
      </main>
    </Layout>
  )
}
