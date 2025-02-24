"use client";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { IconDots, IconEdit, IconTrash } from "@tabler/icons-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useRouter } from "next/navigation";

// Initial project data
const initialProjects = [
  {
    id: 1,
    name: "Legal Research Assistant",
    description: "Knowledge base for tax law and regulations",
    documents: 156,
    conversations: 423,
    lastUpdated: "2024-02-24",
  },
  {
    id: 2,
    name: "Technical Documentation",
    description: "Product documentation and API references",
    documents: 89,
    conversations: 245,
    lastUpdated: "2024-02-23",
  },
];

export default function ProjectsPage() {
  const router = useRouter();
  const [projects, setProjects] = useState(initialProjects);
  const [open, setOpen] = useState(false);
  const [newProject, setNewProject] = useState({
    name: "",
    description: "",
  });

  const handleCreateProject = (e) => {
    e.preventDefault();

    // Create a new project with dummy data
    const project = {
      id: projects.length + 1,
      name: newProject.name,
      description: newProject.description,
      documents: 0,
      conversations: 0,
      lastUpdated: new Date().toISOString().split("T")[0],
    };

    // Add the new project to the list
    setProjects([...projects, project]);

    // Reset form
    setNewProject({
      name: "",
      description: "",
    });

    // Close dialog
    setOpen(false);

    // Navigate to the new project's page
    router.push(`/comprehend/projects/${project.id}/dashboard`);
  };

  const handleDeleteProject = (projectId) => {
    setProjects(projects.filter((p) => p.id !== projectId));
  };

  return (
    <div className='p-6'>
      <div className='flex justify-between items-center mb-6'>
        <div>
          <h1 className='text-2xl font-semibold tracking-tight'>Projects</h1>
          <p className='text-sm text-muted-foreground'>Create and manage your knowledge bases</p>
        </div>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button>Create New Project</Button>
          </DialogTrigger>
          <DialogContent className='sm:max-w-[425px]'>
            <DialogHeader>
              <DialogTitle>Create New Project</DialogTitle>
              <DialogDescription>Set up a new knowledge base for your content. Fill in the details below to get started.</DialogDescription>
            </DialogHeader>
            <form onSubmit={handleCreateProject}>
              <div className='grid gap-4 py-4'>
                <div className='grid grid-cols-4 items-center gap-4'>
                  <Label htmlFor='name' className='text-right'>
                    Name
                  </Label>
                  <Input
                    id='name'
                    value={newProject.name}
                    onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
                    placeholder='e.g., Legal Research Assistant'
                    className='col-span-3'
                  />
                </div>
                <div className='grid grid-cols-4 items-center gap-4'>
                  <Label htmlFor='description' className='text-right'>
                    Description
                  </Label>
                  <Input
                    id='description'
                    value={newProject.description}
                    onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                    placeholder='Describe the purpose of this knowledge base'
                    className='col-span-3'
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type='submit'>Create Project</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className='rounded-md border'>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Description</TableHead>
              <TableHead className='text-right'>Documents</TableHead>
              <TableHead className='text-right'>Conversations</TableHead>
              <TableHead>Last Updated</TableHead>
              <TableHead className='w-[50px]'></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {projects.map((project) => (
              <TableRow key={project.id}>
                <TableCell className='font-medium'>
                  <Link href={`/comprehend/projects/${project.id}/dashboard`} className='hover:underline'>
                    {project.name}
                  </Link>
                </TableCell>
                <TableCell>{project.description}</TableCell>
                <TableCell className='text-right'>{project.documents}</TableCell>
                <TableCell className='text-right'>{project.conversations}</TableCell>
                <TableCell>{project.lastUpdated}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger className='h-8 w-8 flex items-center justify-center rounded-md border transition-colors hover:bg-muted'>
                      <IconDots className='h-4 w-4' />
                      <span className='sr-only'>Open menu</span>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align='end'>
                      <DropdownMenuItem asChild>
                        <Link href={`/comprehend/projects/${project.id}/edit`} className='flex items-center'>
                          <IconEdit className='mr-2 h-4 w-4' />
                          Edit
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem className='flex items-center text-destructive focus:text-destructive' onSelect={() => handleDeleteProject(project.id)}>
                        <IconTrash className='mr-2 h-4 w-4' />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
