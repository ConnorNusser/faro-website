'use client';

import React, { useState } from 'react';
import { useAuth } from '@/components/auth/provider';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Download, MoreVertical, Search, Filter, Grid, List, Eye, Trash, Edit } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

// Mock data for demonstration
const mockUploads = [
  {
    id: '1',
    name: 'Engine Block Design',
    preview: '/api/placeholder/400/300',
    format: 'STL',
    createdAt: new Date('2024-01-15'),
    fileSize: '25.4 MB',
    status: 'complete',
    tags: ['mechanical', 'engine'],
  },
  {
    id: '2',
    name: 'Drone Frame Assembly',
    preview: '/api/placeholder/400/300',
    format: 'OBJ',
    createdAt: new Date('2024-01-20'),
    fileSize: '18.2 MB',
    status: 'complete',
    tags: ['drone', 'assembly'],
  },
  // Add more mock items as needed
];

export default function UploadsPage() {
  const { user } = useAuth();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('newest');
  const [filterFormat, setFilterFormat] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  if (!user) return null;

  const filteredUploads = mockUploads
    .filter(upload => {
      if (filterFormat !== 'all' && upload.format.toLowerCase() !== filterFormat) {
        return false;
      }
      if (searchQuery) {
        return upload.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
               upload.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      }
      return true;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return b.createdAt.getTime() - a.createdAt.getTime();
        case 'oldest':
          return a.createdAt.getTime() - b.createdAt.getTime();
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

  const GridView = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredUploads.map((upload) => (
        <Card key={upload.id} className="bg-white/5 backdrop-blur-lg border-white/10">
          <CardContent className="p-4">
            <div className="relative aspect-video mb-4">
              <img
                src={upload.preview}
                alt={upload.name}
                className="rounded-lg object-cover w-full h-full"
              />
              <div className="absolute top-2 right-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="bg-black/50 hover:bg-black/70 text-white">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>
                      <Eye className="mr-2 h-4 w-4" /> View
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Download className="mr-2 h-4 w-4" /> Download
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Edit className="mr-2 h-4 w-4" /> Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-red-600">
                      <Trash className="mr-2 h-4 w-4" /> Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">{upload.name}</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-white/60">Format</span>
                <span className="text-white">{upload.format}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-white/60">Size</span>
                <span className="text-white">{upload.fileSize}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-white/60">Created</span>
                <span className="text-white">{formatDistanceToNow(upload.createdAt, { addSuffix: true })}</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {upload.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs rounded-full bg-cyan-500/10 text-cyan-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const ListView = () => (
    <div className="space-y-4">
      {filteredUploads.map((upload) => (
        <Card key={upload.id} className="bg-white/5 backdrop-blur-lg border-white/10">
          <CardContent className="p-4">
            <div className="flex items-center gap-4">
              <div className="w-40 h-24 flex-shrink-0">
                <img
                  src={upload.preview}
                  alt={upload.name}
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
              <div className="flex-grow">
                <h3 className="text-lg font-semibold text-white">{upload.name}</h3>
                <div className="grid grid-cols-3 gap-4 mt-2">
                  <div className="text-sm">
                    <span className="text-white/60">Format: </span>
                    <span className="text-white">{upload.format}</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-white/60">Size: </span>
                    <span className="text-white">{upload.fileSize}</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-white/60">Created: </span>
                    <span className="text-white">
                      {formatDistanceToNow(upload.createdAt, { addSuffix: true })}
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {upload.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded-full bg-cyan-500/10 text-cyan-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="text-white/60 hover:text-white">
                  <Eye className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="text-white/60 hover:text-white">
                  <Download className="h-4 w-4" />
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="text-white/60 hover:text-white">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>
                      <Edit className="mr-2 h-4 w-4" /> Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-red-600">
                      <Trash className="mr-2 h-4 w-4" /> Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  return (
    <div className="pt-24 min-h-screen bg-[#082832]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            Uploads
          </h1>
          <p className="text-white/60">
            View and manage your CAD designs
          </p>
        </div>

        {/* Filters and Controls */}
        <Card className="bg-white/5 backdrop-blur-lg border-white/10 mb-6">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-grow">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 h-4 w-4" />
                  <Input
                    placeholder="Search designs..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 bg-white/10 border-white/10 text-white"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <Select value={filterFormat} onValueChange={setFilterFormat}>
                  <SelectTrigger className="w-[120px] bg-white/10 border-white/10 text-white">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Format" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Formats</SelectItem>
                    <SelectItem value="stl">STL</SelectItem>
                    <SelectItem value="obj">OBJ</SelectItem>
                    <SelectItem value="fbx">FBX</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[140px] bg-white/10 border-white/10 text-white">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="oldest">Oldest First</SelectItem>
                    <SelectItem value="name">Name</SelectItem>
                  </SelectContent>
                </Select>
                <div className="flex rounded-md overflow-hidden">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'ghost'}
                    size="icon"
                    onClick={() => setViewMode('grid')}
                    className={viewMode === 'grid' ? 'bg-cyan-500' : 'text-white'}
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'ghost'}
                    size="icon"
                    onClick={() => setViewMode('list')}
                    className={viewMode === 'list' ? 'bg-cyan-500' : 'text-white'}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Content */}
        {viewMode === 'grid' ? <GridView /> : <ListView />}
      </div>
    </div>
  );
}