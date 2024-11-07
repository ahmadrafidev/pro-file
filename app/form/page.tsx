import Layout from '../../components/Layout/Layout';

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
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export default function FormPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-xl md:text-4xl font-bold tracking-tighter">Generate Resumes</h1>
      </div>
      <main className="container mx-auto py-6 flex justify-center">
        <Tabs defaultValue="personal" className="w-1/2">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="personal">Personal Information</TabsTrigger>
            <TabsTrigger value="templates">Templates</TabsTrigger>
          </TabsList>
          <TabsContent value="personal">
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>
                  Fill your personal best information.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="John Doe" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="education">Education</Label>
                  <Input id="education" placeholder="Harvard University" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="work">Work Experiences</Label>
                  <Input id="work" placeholder="Google" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="projects">Projects</Label>
                  <Input id="projects" placeholder="OpenAI" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="volunteer">Volunteer</Label>
                  <Input id="volunteer" placeholder="UN" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="skill">Relevant Skills</Label>
                  <Input id="skill" placeholder="Coding, Excel, etc" />
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button>Choose template</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="templates">
            <Card>
              <CardHeader>
                <CardTitle>Resume Templates</CardTitle>
                <CardDescription>
                  Choose your favorites resumes here.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button>Generate Resumes</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </Layout>
  )
}