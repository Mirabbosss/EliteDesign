"use client";

import { Categories } from "../../../../../mocks/mock";
import { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import CardThreeDote from "../../.././../../../public/icons/admin-three-dote.svg";
import CardDeleteIcon from "../../.././../../../public/icons/admin-delete.svg";
import CardEditIcon from "../../.././../../../public/icons/admin-edit.svg";
import CloseIcon from "../../.././../../../public/icons/close-x.svg";

interface Banners {
  id: number;
  alt: string;
  image: {
    src: string;
  };
}

export const Banner = () => {
  const { id } = useParams();
  const currentCategory = Categories.find(
    (category) => category.id === Number(id)
  );

  const [isOpenAddSideBar, setIsOpenAddSideBar] = useState(false);
  const [isOpenEditSideBar, setIsOpenEditSideBar] = useState(false);
  const [banners, setBanners] = useState<Banners[]>(
    currentCategory?.banners || []
  );
  const [title, setTitle] = useState("");
  const [editedTitle, setEditedTitle] = useState("");
  const [editingBannerId, setEditingBannerId] = useState<number | null>(null);
  const [bannerImage, setBannerImage] = useState<File | null>(null);

  const handleOpenAddSideBar = () => {
    setIsOpenEditSideBar(false);
    setIsOpenAddSideBar(true);
  };

  const handleOpenEditSideBar = (bannerId: number) => {
    const bannerToEdit = banners.find((banner) => banner.id === bannerId);
    if (bannerToEdit) {
      setEditedTitle(bannerToEdit.alt);
    }
    setEditingBannerId(bannerId);
    setIsOpenAddSideBar(false);
    setIsOpenEditSideBar(!isOpenEditSideBar);
  };

  const handleAddBanner = (value: string, imageFile: File | null) => {
    if (value.trim().length !== 0 && imageFile) {
      const newId = Math.max(...banners.map((b) => b.id), 0) + 1;
      const imageUrl = URL.createObjectURL(imageFile);
      setBanners([
        ...banners,
        { id: newId, alt: value, image: { src: imageUrl } },
      ]);
      setTitle("");
      setBannerImage(null);
      setIsOpenAddSideBar(false);
    } else {
      alert("Поле не может быть пустым");
    }
  };

  const handleDeleteBanner = (bannerId: number) => {
    const updatedBanners = banners.filter((banner) => banner.id !== bannerId);
    setBanners(updatedBanners);
    if (updatedBanners.length === 0) {
      setIsOpenAddSideBar(false);
      setIsOpenEditSideBar(false);
    }
  };

  const handleEditBanner = (
    bannerId: number,
    newTitle: string,
    imageFile: File | null
  ) => {
    if (newTitle.trim().length !== 0) {
      const updatedBanners = banners.map((banner) => {
        if (banner.id === bannerId) {
          const updatedBanner = { ...banner, alt: newTitle };
          if (imageFile) {
            updatedBanner.image = { src: URL.createObjectURL(imageFile) };
            setBannerImage(null);
          }
          return updatedBanner;
        }
        return banner;
      });
      setBanners(updatedBanners);
      setEditedTitle("");
      setBannerImage(null);
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
          <span>Добавить баннер +</span>
        </div>

        <div className="grid grid-cols-1 mt-[22px] gap-[7px]">
          {/* BANNERS */}
          {banners.map((banner, index) => {
            return (
              <div key={index}>
                <h1 className="p-[10px]">{banner.alt || "No Title"}</h1>
                <div className="flex items-center gap-2">
                  <span>{index + 1}</span>
                  <div
                    className="w-[300px] min-h-[91px] h-full bg-[#D9D9D9] flex justify-between items-center cursor-pointer bg-cover relative"
                    style={{ backgroundImage: `url(${banner.image.src})` }}
                  >
                    <div className="flex flex-col gap-4 items-end">
                      <span className="grid grid-cols-1 gap-1 bg-[#D9D9D9] w-[30px] h-[30px] p-2 absolute right-0 top-0">
                        <Image src={CardThreeDote} alt="icon" />
                        <Image src={CardThreeDote} alt="icon" />
                      </span>
                      <span className="h-[31px] bg-[#D9D9D9] flex justify-between p-[7px] gap-[5px] absolute right-0 bottom-0">
                        <Image
                          src={CardDeleteIcon}
                          alt="icon"
                          className="hover:scale-110"
                          onClick={() => handleDeleteBanner(banner.id)}
                        />
                        <Image
                          src={CardEditIcon}
                          alt="icon"
                          className="hover:scale-110"
                          onClick={() => handleOpenEditSideBar(banner.id)}
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Right Add Banner Sidebar */}
      <div
        className={`h-full w-1/3 px-[28px] py-[65px] ${
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

          <label htmlFor="image">Баннер</label>
          <input
            type="file"
            id="image"
            className="mt-3 border-2 border-gray-400 outline-0"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                setBannerImage(file);
              }
            }}
          />
          <label htmlFor="name">alt</label>
          <input
            type="text"
            id="name"
            className="mt-3 border-2 border-gray-400 outline-0"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button
            className="bg-[#90FFAE] py-[15px] px-[28px] mx-auto mt-[25px]"
            onClick={() => handleAddBanner(title, bannerImage)}
          >
            СОХРАНИТЬ
          </button>
        </div>
      </div>

      {/* Right Edit Banner Sidebar */}
      <div
        className={`h-full w-1/3 px-[28px] py-[65px] ${
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

          <label htmlFor="image">Баннер</label>
          <input
            type="file"
            id="image"
            className="mt-3 border-2 border-gray-400 outline-0"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                setBannerImage(file);
              }
            }}
          />

          <label htmlFor="name">alt</label>
          <input
            type="text"
            id="name"
            className="mt-3 border-2 border-gray-400 outline-0"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <button
            className="bg-[#90FFAE] py-[15px] px-[28px] mx-auto mt-[25px]"
            onClick={() =>
              handleEditBanner(editingBannerId!, editedTitle, bannerImage)
            }
          >
            СОХРАНИТЬ
          </button>
        </div>
      </div>
    </div>
  );
};
