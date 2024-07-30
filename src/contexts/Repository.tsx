/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { Project } from "../types/Project";
import { api } from "../services/api";

interface RepositoryProviderProps {
  children: ReactNode;
}

interface RepoContextData {
  projects: Project[];
}

export const RepositoryContext = createContext({} as RepoContextData);

export const RepositoryProvider = ({ children }: RepositoryProviderProps) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(false);

  const getLatestRepos = (repository: Project[], count = 6) => {
    return repository
      .sort(
        (a, b) =>
          (new Date(b.updated_at) as any) - (new Date(a.updated_at) as any)
      )
      .slice(0, count);
  };

  useEffect(() => {
    const getRepositories = async () => {
      try {
        setLoading(true);
        const response = await api.get("/mikasampaio/repos");

        const filteredRepositories = getLatestRepos(response.data);
        setProjects(
          filteredRepositories.filter(
            (project) => project.name !== "mikasampaio" && project.name !== "portfolio-react"
          )
        );
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    getRepositories();
  }, []);

  return (
    <RepositoryContext.Provider value={{ projects }}>
      {!loading && children}
    </RepositoryContext.Provider>
  );
};

export const Repository = () => {
  return useContext(RepositoryContext);
};
