'use client'

import * as React from "react"
import { useForm } from "react-hook-form"
import { ImagePlus, Upload } from 'lucide-react'

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Navbar from "@/components/global/Navbar"

interface CompanyFormValues {
  companyName: string
  phoneNumber: string
  address: string
  description: string
  country: string
  cityTown: string
  state: string
  pinCode: string
  email: string
  logo?: FileList
  image?: FileList
}

export default function CompanyInformationForm() {
  const form = useForm<CompanyFormValues>()
  const [logoPreview, setLogoPreview] = React.useState<string>("")
  const [imagePreview, setImagePreview] = React.useState<string>("")

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'logo' | 'image') => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        if (type === 'logo') {
          setLogoPreview(reader.result as string)
        } else {
          setImagePreview(reader.result as string)
        }
      }
      reader.readAsDataURL(file)
      console.log(logoPreview, imagePreview);
      
    }
  }

  async function onSubmit(data: CompanyFormValues) {
    console.log(data)
    // Handle form submission
  }

  return (
    <div className="min-h-screen bg-[#D6EADF] p-8">
      <Navbar color='bg-transparent' />
      <Card className="mx-auto  w-5/6 bg-[#D6EADF] outline">
        <CardHeader>
          <CardTitle>Company Information</CardTitle>
          <CardDescription>
            Lets start with the basics. To ensure employers can reach you, input atleast your name, email, and phone number.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {/* Logo Upload */}
                <div className="space-y-2">
                  <FormLabel>Add Logo (optional)</FormLabel>
                  <div className="relative h-40 w-40">
                    <Input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      id="logo-upload"
                      onChange={(e) => handleImageChange(e, 'logo')}
                    />
                    <label
                      htmlFor="logo-upload"
                      className="flex h-full w-full cursor-pointer items-center justify-center rounded-lg border-2 border-dashed border-gray-300 hover:border-gray-400"
                    >
                      {logoPreview ? (
                        <img
                          src={logoPreview}
                          alt="Logo preview"
                          className="h-full w-full rounded-lg object-cover"
                        />
                      ) : (
                        <div className="flex flex-col items-center gap-2">
                          <Upload className="h-8 w-8 text-gray-400" />
                          <span className="text-sm text-gray-500">Add Logo</span>
                        </div>
                      )}
                    </label>
                  </div>
                </div>

                {/* Image Upload */}
                <div className="space-y-2">
                  <FormLabel>Add Image (optional)</FormLabel>
                  <div className="relative h-40 w-40">
                    <Input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      id="image-upload"
                      onChange={(e) => handleImageChange(e, 'image')}
                    />
                    <label
                      htmlFor="image-upload"
                      className="flex h-full w-full cursor-pointer items-center justify-center rounded-lg border-2 border-dashed border-gray-300 hover:border-gray-400"
                    >
                      {imagePreview ? (
                        <img
                          src={imagePreview}
                          alt="Image preview"
                          className="h-full w-full rounded-lg object-cover"
                        />
                      ) : (
                        <div className="flex flex-col items-center gap-2">
                          <ImagePlus className="h-8 w-8 text-gray-400" />
                          <span className="text-sm text-gray-500">Add Image</span>
                        </div>
                      )}
                    </label>
                  </div>
                </div>
              </div>

              <div className="grid gap-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="companyName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter company name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phoneNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter phone number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Address</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter address" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Enter company description"
                          className="min-h-[100px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="country"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Country</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter country" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="cityTown"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>City / Town</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter city or town" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="state"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>State</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter state" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="pinCode"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Pin Code</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter pin code" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter email" type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Button type="submit" className="w-full">
                Save Details
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}

