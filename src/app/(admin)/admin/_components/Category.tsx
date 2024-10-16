"use client";
import { Categories } from "../../../../mocks/mock";
import { useState } from "react";
import Image, { type StaticImageData } from "next/image";
import CloseIcon from "../../../../../public/icons/close-x.svg";
import CardThreeDote from "../../../../../public/icons/admin-three-dote.svg";
import CardDeleteIcon from "../../../../../public/icons/admin-delete.svg";
import CardEditIcon from "../../../../../public/icons/admin-edit.svg";
import Link from "next/link";

interface CategoryType {
  id: number;
  title: string;
  banners: {
    id: number;
    image: StaticImageData;
    alt: string;
  }[];
}

export const Category = () => {
  const [isOpenAddSideBar, setIsOpenAddSideBar] = useState(false);
  const [isOpenEditSideBar, setIsOpenEditSideBar] = useState(false);
  const [categories, setCategories] = useState<CategoryType[]>(Categories);
  const [title, setTitle] = useState("");
  const [editedTitle, setEditedTitle] = useState("");
  const [editingCategoryId, setEditingCategoryId] = useState<number | null>(
    null
  );

  const handleOpenAddSideBar = () => {
    setIsOpenEditSideBar(false);
    setIsOpenAddSideBar(true);
  };

  const handleOpenEditSideBar = (categoryId: number) => {
    const categoryToEdit = categories.find(
      (category) => category.id === categoryId
    );
    if (categoryToEdit) {
      setEditedTitle(categoryToEdit.title);
    }
    setEditingCategoryId(categoryId);
    setIsOpenAddSideBar(false);
    setIsOpenEditSideBar(true);
  };

  const handleIcons = (event: React.MouseEvent<HTMLSpanElement>) => {
    event.stopPropagation();
  };

  const handleAddCategory = (value: string) => {
    if (value.trim().length !== 0) {
      const newCategory: CategoryType = {
        id: categories.length + 1,
        title: value,
        banners: [],
      };
      setCategories([...categories, newCategory]);
      setTitle("");
      setIsOpenAddSideBar(false);
    } else {
      alert("Поле не может быть пустым");
    }
  };

  const handleDeleteCategory = (categoryId: number) => {
    const updatedCategories = categories.filter(
      (category) => category.id !== categoryId
    );
    setCategories(updatedCategories);
    if (updatedCategories.length === 0) {
      setIsOpenAddSideBar(false);
      setIsOpenEditSideBar(false);
    }
  };

  const handleEditCategory = (categoryId: number, newTitle: string) => {
    if (editingCategoryId !== null && newTitle.trim().length !== 0) {
      setCategories(
        categories.map((category) =>
          category.id === categoryId
            ? { ...category, title: newTitle }
            : category
        )
      );
      setEditedTitle("");
      setIsOpenAddSideBar(false);
      setIsOpenEditSideBar(false);
    } else {
      alert("Поле не может быть пустым");
    }
  };

  const handleCloseAllSidebar = () => {
    setIsOpenAddSideBar(false);
    setIsOpenEditSideBar(false);
  };

  return (
    <div className="flex w-full h-full gap-5">
      {/* Main */}
      <div className="h-full w-2/3 py-[26px] px-[22px]">
        <div
          onClick={handleOpenAddSideBar}
          className="max-w-[200px] w-full max-h-[61px] h-full bg-[#D9D9D9] flex justify-center items-center py-[23px] cursor-pointer ml-[14px]"
        >
          <span>Добавить котегорию +</span>
        </div>

        <div className="grid grid-cols-1 mt-[22px] gap-[7px]">
          {/* CATEGORIES */}
          {categories.map((category, index) => {
            return (
              <div key={index}>
                <Link href={`/admin/${category.id}`} legacyBehavior>
                  <div className="flex items-center gap-2">
                    <span>{index + 1}</span>
                    <div className="w-auto max-h-[91px] h-full bg-[#D9D9D9] flex justify-between items-center cursor-pointer">
                      <div className="p-[10px] w-[250px]">
                        {category.title || "No title"}{" "}
                        {category.banners ? `(${category.banners.length})` : ""}
                      </div>

                      <div className="flex flex-col gap-3 items-end">
                        <span className="grid grid-cols-1 gap-1 bg-[#D9D9D9] w-[30px] h-[30px] p-2">
                          <Image src={CardThreeDote} alt="icon" />
                          <Image src={CardThreeDote} alt="icon" />
                        </span>

                        <span
                          className="h-[31px] bg-[#D9D9D9] flex justify-between p-[7px] gap-[5px]"
                          onClick={handleIcons}
                        >
                          <Image
                            src={CardDeleteIcon}
                            alt="icon"
                            className="hover:scale-110"
                            onClick={() => handleDeleteCategory(category.id)}
                          />
                          <Image
                            src={CardEditIcon}
                            alt="icon"
                            className="hover:scale-110"
                            onClick={() => handleOpenEditSideBar(category.id)}
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      {/* Right Add Category Sidebar */}
      <div
        className={`h-screen w-1/3 px-[28px] py-[65px] ${
          isOpenAddSideBar ? "block" : "hidden"
        } border-l-2 border-gray-400`}
      >
        <div className="flex flex-col relative">
          <button
            className="absolute top-[-50px] right-0"
            onClick={handleCloseAllSidebar}
          >
            <Image src={CloseIcon} alt="icon" />
          </button>

          <label htmlFor="name">Название котегории</label>
          <input
            type="text"
            id="name"
            className="mt-3 border-2 border-gray-400 outline-0"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button
            className="bg-[#90FFAE] py-[15px] px-[28px] mx-auto mt-[25px]"
            onClick={() => handleAddCategory(title)}
          >
            СОХРАНИТЬ
          </button>
        </div>
      </div>

      {/* Right Edit Category Sidebar */}
      <div
        className={`h-screen w-1/3 px-[28px] py-[65px] ${
          isOpenEditSideBar ? "block" : "hidden"
        } border-l-2 border-gray-400`}
      >
        <div className="flex flex-col relative">
          <button
            className="absolute top-[-50px] right-0"
            onClick={handleCloseAllSidebar}
          >
            <Image src={CloseIcon} alt="icon" />
          </button>

          <label htmlFor="name">Новое название категории</label>
          <input
            type="text"
            id="name"
            className="mt-3 border-2 border-gray-400 outline-0"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <button
            className="bg-[#90FFAE] py-[15px] px-[28px] mx-auto mt-[25px]"
            onClick={() => handleEditCategory(editingCategoryId!, editedTitle)}
          >
            СОХРАНИТЬ
          </button>
        </div>
      </div>
    </div>
  );
};
