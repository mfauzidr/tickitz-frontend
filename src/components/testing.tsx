import * as React from "react";

function MyComponent() {
  return (
    <div className="flex overflow-hidden flex-col items-start pt-3 pb-10 pl-4 mx-auto w-full rounded-xl border border-solid border-neutral-200 max-w-[480px]">
      <div className="flex gap-5 justify-between self-stretch">
        <div className="flex flex-col">
          <img
            loading="lazy"
            src="../assets/icons/Ebu_Id.svg"
            className="object-contain w-28 max-w-full aspect-[2.49]"
          />
          <div className="flex flex-col pl-3.5 w-full">
            <div className="self-start text-2xl font-bold tracking-wider leading-10 text-neutral-900">
              EBV.id
            </div>
            <div className="gap-4 text-xs font-light tracking-wider leading-5 text-slate-500 w-[207px]">
              Whatever street No.12, South Purwokerto
            </div>
          </div>
        </div>
        <img
          loading="lazy"
          
          className="object-contain shrink-0 my-auto aspect-square w-[63px]"
        />
      </div>
      <img
        loading="lazy"
        src="../assets/icons/tickitz_logo.svg"
        className="object-contain self-center mt-5 w-full aspect-[250] max-w-[276px]"
      />
      <div className="mt-5 text-xl font-semibold tracking-wide leading-9 text-black">
        REGULAR
      </div>
      <div className="flex gap-5 mt-7 max-w-full text-sm tracking-wider leading-6 text-center w-[196px]">
        <div className="gap-2.5 self-stretch px-2.5 py-1 text-gray-600 rounded-3xl bg-slate-400 bg-opacity-20 min-h-[31px]">
          08:30 AM
        </div>
        <div className="gap-2.5 self-stretch px-2.5 py-1 text-gray-600 rounded-3xl bg-slate-400 bg-opacity-20 min-h-[31px]">
          10:30 AM
        </div>
      </div>
      <div className="flex gap-5 mt-7 max-w-full text-sm tracking-wider leading-6 text-center text-gray-600 w-[196px]">
        <div className="gap-2.5 self-stretch px-2.5 py-1 rounded-3xl bg-slate-400 bg-opacity-20 min-h-[31px]">
          10:30 AM
        </div>
        <div className="gap-2.5 self-stretch px-2.5 py-1 rounded-3xl bg-slate-400 bg-opacity-20 min-h-[31px]">
          10:30 AM
        </div>
      </div>
      <div className="flex gap-5 items-start mt-7 max-w-full text-sm tracking-wider leading-6 text-center w-[196px]">
        <div className="gap-2.5 self-stretch px-2.5 py-1 text-gray-600 rounded-3xl bg-slate-400 bg-opacity-20 min-h-[31px]">
          10:30 AM
        </div>
        <div className="gap-2.5 self-stretch px-2.5 py-1 mt-2.5 text-white bg-blue-700 rounded-3xl min-h-[31px]">
          10:30 AM
        </div>
      </div>
      <div className="gap-2.5 self-stretch px-2.5 py-1 mt-9 text-sm tracking-wider leading-6 text-center text-gray-600 rounded-3xl bg-slate-400 bg-opacity-20 min-h-[31px]">
        10:30 AM
      </div>
      <div className="mt-6 text-xl font-semibold tracking-wide leading-9 text-black">
        GOLD
      </div>
      <div className="flex gap-5 mt-5 max-w-full text-sm tracking-wider leading-6 text-center w-[196px]">
        <div className="gap-2.5 self-stretch px-2.5 py-1 text-gray-600 rounded-3xl bg-slate-400 bg-opacity-20 min-h-[31px]">
          08:30 AM
        </div>
        <div className="gap-2.5 self-stretch px-2.5 py-1 text-gray-600 rounded-3xl bg-slate-400 bg-opacity-20 min-h-[31px]">
          10:30 AM
        </div>
      </div>
      <div className="gap-2.5 self-stretch px-2.5 py-1 mt-9 text-sm tracking-wider leading-6 text-center text-gray-600 rounded-3xl bg-slate-400 bg-opacity-20 min-h-[31px]">
        10:30 AM
      </div>
      <div className="flex gap-5 mt-9 max-w-full text-sm tracking-wider leading-6 text-center w-[196px]">
        <div className="gap-2.5 self-stretch px-2.5 py-1 text-gray-600 rounded-3xl bg-slate-400 bg-opacity-20 min-h-[31px]">
          10:30 AM
        </div>
        <div className="gap-2.5 self-stretch px-2.5 py-1 text-white bg-blue-700 rounded-3xl min-h-[31px]">
          10:30 AM
        </div>
      </div>
      <div className="gap-2.5 self-stretch px-2.5 py-1 mt-9 text-sm tracking-wider leading-6 text-center text-gray-600 rounded-3xl bg-slate-400 bg-opacity-20 min-h-[31px]">
        10:30 AM
      </div>
      <div className="mt-9 text-xl font-semibold tracking-wide leading-9 text-black">
        PLATINUM S
      </div>
      <div className="flex gap-5 mt-5 max-w-full text-sm tracking-wider leading-6 text-center w-[196px]">
        <div className="gap-2.5 self-stretch px-2.5 py-1 text-gray-600 rounded-3xl bg-slate-400 bg-opacity-20 min-h-[31px]">
          08:30 AM
        </div>
        <div className="gap-2.5 self-stretch px-2.5 py-1 text-gray-600 rounded-3xl bg-slate-400 bg-opacity-20 min-h-[31px]">
          10:30 AM
        </div>
      </div>
      <div className="gap-2.5 self-stretch px-2.5 py-1 mt-9 text-sm tracking-wider leading-6 text-center text-gray-600 rounded-3xl bg-slate-400 bg-opacity-20 min-h-[31px]">
        10:30 AM
      </div>
      <div className="flex gap-5 mt-9 max-w-full text-sm tracking-wider leading-6 text-center w-[196px]">
        <div className="gap-2.5 self-stretch px-2.5 py-1 text-gray-600 rounded-3xl bg-slate-400 bg-opacity-20 min-h-[31px]">
          10:30 AM
        </div>
        <div className="gap-2.5 self-stretch px-2.5 py-1 text-white bg-blue-700 rounded-3xl min-h-[31px]">
          10:30 AM
        </div>
      </div>
      <div className="gap-2.5 self-stretch px-2.5 py-1 mt-9 text-sm tracking-wider leading-6 text-center text-gray-600 rounded-3xl bg-slate-400 bg-opacity-20 min-h-[31px]">
        10:30 AM
      </div>
    </div>
  );
}